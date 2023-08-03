"use client";

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { APIAlert } from "./api-alert";

interface APIListProps {
  entityName: string;
  entityIdName: string;
}

export const APIList: React.FC<APIListProps> = ({
  entityName,
  entityIdName,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseURL = `${origin}/api/${params.storeId}`;

  return (
    <>
      <APIAlert
        title="GET"
        variant="public"
        description={`${baseURL}/${entityName}`}
      />
      <APIAlert
        title="GET"
        variant="public"
        description={`${baseURL}/${entityName}/{${entityIdName}}`}
      />
      <APIAlert
        title="POST"
        variant="admin"
        description={`${baseURL}/${entityName}`}
      />
      <APIAlert
        title="PATCH"
        variant="admin"
        description={`${baseURL}/${entityName}/{${entityIdName}}`}
      />
      <APIAlert
        title="DELETE"
        variant="public"
        description={`${baseURL}/${entityName}/{${entityIdName}}`}
      />
    </>
  );
};
