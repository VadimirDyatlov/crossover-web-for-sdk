import { useEffect } from "react";
import { useMerchantInfo } from "./merchant-info";

export const useMerchantLazy = () => {
  const { data, isLoading, fetchMerchant } = useMerchantInfo();
  
  useEffect(() => {
    if (!data && !isLoading) fetchMerchant();
  }, [data, isLoading, fetchMerchant]);
};
