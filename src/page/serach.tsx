import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getData } from "../api/searchApi";
import { Input } from "../component/input";
import { PageContainer } from "../component/pageContainer";
import { TableResult } from "../component/tableResult";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    // Дальше игнорируется ошибка, связанная с типизацией query params
    // @ts-ignore:disable-next-line
    const currentParams = Object.fromEntries([...searchParams]);

    setSearchString(currentParams.searchString);

    getData(currentParams.searchString)
      .then((res) => setData(res))
      .catch((e) => {
        setData([]);
        toast.error(e);
      });
  }, [searchParams]);

  return (
    <PageContainer>
      <Input defaultValue={searchString} />
      <TableResult data={data} />
    </PageContainer>
  );
};
