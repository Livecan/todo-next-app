import { NextPage } from "next";
import { useRouter } from "next/router";
import ListViewContainer from "@/src/containers/listViewContainer";
import ListViewHeadingContainer from "@/src/containers/listViewHeadingContainer";
import useAppNavigation from "@/src/hooks/useAppNavigation";
import FilterValueType from "@/src/types/filterValueType";
import { useCallback, useEffect, useState } from "react";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filterChanged) {
        setFilterChanged(false);
        redirectViewTodoList(id, {
          filter: filterInternal,
          search: searchInternal,
        });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [id, filterChanged, filterInternal, searchInternal, redirectViewTodoList]);

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
