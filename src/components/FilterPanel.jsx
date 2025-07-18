import { useSelector, useDispatch } from "react-redux";
import { clearFilters, removeFilter } from "store/filters/filters-actions";
import { selectFilters } from "store/filters/filters-selectors";
import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";

const FilterPanel = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter));
  };

  if (filters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => (
            <Badge
              key={filter}
              onClear={() => handleRemoveFilter(filter)}
              variant="clearable"
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilters)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
