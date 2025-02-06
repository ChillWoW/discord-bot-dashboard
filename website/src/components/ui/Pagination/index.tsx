import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useStyles from "./Pagination.styles";

interface PaginationProps {
  total: number;
  value: number;
  onChange: (page: number) => void;
  siblings?: number;
  boundaries?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  value,
  onChange,
  siblings = 1,
  boundaries = 1,
}) => {
  const { classes, cx } = useStyles();

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const getRange = () => {
    const totalNumbers = siblings * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (total <= totalBlocks) {
      return range(1, total);
    }

    const leftSibling = Math.max(value - siblings, boundaries);
    const rightSibling = Math.min(value + siblings, total - boundaries + 1);

    const shouldShowLeftDots = leftSibling > boundaries + 2;
    const shouldShowRightDots = rightSibling < total - (boundaries + 1);

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, 3 + 2 * siblings);
      return [...leftRange, "dots", ...range(total - boundaries + 1, total)];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(total - (3 + 2 * siblings) + 1, total);
      return [...range(1, boundaries), "dots", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSibling, rightSibling);
      return [
        ...range(1, boundaries),
        "dots",
        ...middleRange,
        "dots",
        ...range(total - boundaries + 1, total),
      ];
    }
  };

  const items = getRange()?.map((page, index) => {
    if (page === "dots") {
      return (
        <div key={`dots-${index}`} className={cx(classes.item, classes.dots)}>
          ...
        </div>
      );
    }

    return (
      <div
        key={page}
        className={cx(classes.item, {
          [classes.active]: page === value,
        })}
        onClick={() => onChange(page as number)}
      >
        {page}
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <div
        className={cx(classes.item, { [classes.disabled]: value === 1 })}
        onClick={() => value > 1 && onChange(value - 1)}
      >
        <FontAwesomeIcon icon="chevron-left" />
      </div>
      {items}
      <div
        className={cx(classes.item, { [classes.disabled]: value === total })}
        onClick={() => value < total && onChange(value + 1)}
      >
        <FontAwesomeIcon icon="chevron-right" />
      </div>
    </div>
  );
};

export default Pagination;
