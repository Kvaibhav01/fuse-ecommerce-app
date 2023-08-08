import prismadb from "@/lib/prismadb";
import { OrdersClient } from "./components/client";
import { OrderColumn } from "./components/columns";
import { format } from "date-fns";
import { formatter } from "@/lib/utils";

const OrdersPage = async (params: { storeId: string }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      // Use the array for order items. Since our order has many product/items in it
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    products: item.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    totalPrice: formatter.format(
      // Sum up all the prices of all items in the `orderItems` array. Initial value set to `0`.
      item.orderItems.reduce((total, item) => {
        return total + Number(item.product.price);
      }, 0),
    ),
    isPaid: item.isPaid,
    // Date should be in this format: Januaray 1st, 2023
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrdersClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
