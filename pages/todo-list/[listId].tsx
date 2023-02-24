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

  const [filterChanged, setFilterChanged] = useState(false);
  const [filterInternal, setFilterInternal] = useState(filter);
  const [searchInternal, setSearchInternal] = useState(search);

  const debouncedFilterChanged = useDebounce(filterChanged);

  useEffect(() => {
    if (debouncedFilterChanged && filterChanged) {
      setFilterChanged(false);
      redirectViewTodoList(id, {
        filter: filterInternal,
        search: searchInternal,
      });
    }
  }, [
    id,
    filterInternal,
    searchInternal,
    filterChanged,
    debouncedFilterChanged,
    redirectViewTodoList,
  ]);

  const handleChangeFilter = useCallback((filter: FilterValueType) => {
    setFilterChanged(true);
    setFilterInternal(filter);
  }, []);

  const handleSearchChange = useCallback((search: string) => {
    setFilterChanged(true);
    setSearchInternal(search);
  }, []);

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
