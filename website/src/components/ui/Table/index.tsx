import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useStyles from "./Table.styles";

export interface TableColumn<T> {
  key: string;
  title: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  striped?: boolean;
  highlightOnHover?: boolean;
  withBorder?: boolean;
  sortable?: boolean;
  onSort?: (key: string, direction: "asc" | "desc") => void;
  classNames?: {
    wrapper?: string;
    table?: string;
    thead?: string;
    tbody?: string;
    th?: string;
    td?: string;
    tr?: string;
  };
}

const Table = <T extends { [key: string]: any }>({
  data,
  columns,
  striped = false,
  highlightOnHover = false,
  withBorder = false,
  sortable = false,
  onSort,
  classNames,
}: TableProps<T>) => {
  const { classes, cx } = useStyles();
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
    "asc"
  );

  const handleSort = (key: string) => {
    if (!sortable || !onSort) return;

    const newDirection =
      sortKey === key && sortDirection === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortDirection(newDirection);
    onSort(key, newDirection);
  };

  return (
    <div className={cx(classes.wrapper, classNames?.wrapper)}>
      <table
        className={cx(classes.table, classNames?.table, {
          [classes.withBorder]: withBorder,
        })}
      >
        <thead className={cx(classes.thead, classNames?.thead)}>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={cx(classes.th, classNames?.th)}>
                {sortable && column.sortable !== false ? (
                  <button
                    className={classes.sortButton}
                    onClick={() => handleSort(column.key)}
                  >
                    {column.title}
                    <FontAwesomeIcon
                      icon={sortDirection === "asc" ? "sort-up" : "sort-down"}
                      className={cx(classes.sortIcon, {
                        [classes.sortActive]: sortKey === column.key,
                      })}
                    />
                  </button>
                ) : (
                  column.title
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={classNames?.tbody}>
          {data.map((item, index) => (
            <tr
              key={index}
              className={cx(classes.tr, classNames?.tr, {
                [classes.striped]: striped,
                [classes.highlightOnHover]: highlightOnHover,
              })}
            >
              {columns.map((column) => (
                <td key={column.key} className={cx(classes.td, classNames?.td)}>
                  {column.render ? column.render(item) : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
