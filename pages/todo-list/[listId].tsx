import { NextPage } from "next";
import { useRouter } from "next/router";
import ListViewContainer from "@/src/containers/listViewContainer";
import ListViewHeadingContainer from "@/src/containers/listViewHeadingContainer";
import useAppNavigation from "@/src/hooks/useAppNavigation";
import FilterValueType from "@/src/types/filterValueType";
import { useCallback, useEffect, useMemo, useState } from "react";
import useDebounce from "@/src/hooks/useDebounce";

const TodoList: NextPage = () => {
  const { query } = useRouter();
  const { redirectCreateTodoItem, redirectViewTodoList, redirectViewTodoItem } =
    useAppNavigation();

  const {
    listId: id,
    filter = "all",
    search,
  } = query as {
    listId: string;
    filter?: FilterValueType;
    search?: string;
  };

  const [filterInternal, setFilterInternal] = useState(filter);
  const [searchInternal, setSearchInternal] = useState(search);

  const searchAndFilterInternal = useMemo(
    () => ({
      filter: filterInternal,
      search: searchInternal,
    }),
    [filterInternal, searchInternal]
  );

  const debouncedSearchAndFilter = useDebounce(searchAndFilterInternal);

  useEffect(
    () => { redirectViewTodoList(id, debouncedSearchAndFilter) },
    [id, debouncedSearchAndFilter, redirectViewTodoList]
  );

  const handleChangeFilter = useCallback(
    (filter: FilterValueType) => setFilterInternal(filter),
    []
  );

  const handleSearchChange = useCallback(
    (search: string) => setSearchInternal(search),
    []
  );

  return (
    <>
      <ListViewHeadingContainer
        id={id}
        onCreateItem={redirectCreateTodoItem}
        filter={filterInternal}
        onChangeFilter={handleChangeFilter}
        search={searchInternal}
        onSearchChange={handleSearchChange}
      />
      <ListViewContainer
        id={id}
        filter={filter}
        search={search}
        onViewItem={(todoItemId: string) =>
          redirectViewTodoItem(id, todoItemId)
        }
      />
    </>
  );
};

export default TodoList;
