import { useState, useMemo } from 'react';
const useFilter = (data) => {
    const [filters, setFilters] = useState({ year: '', quarter: '', homeOwner: '', term: '', });

    const filteredData = useMemo(() => {
        return data.filter(item =>
            (!filters.year || item.year.toString() === filters.year) &&
            (!filters.quarter || item.quarter.toString() === filters.quarter) &&
            (!filters.homeOwner || item.homeOwnership === filters.homeOwner) &&
            (!filters.term || item.term === filters.term)
        );
    }, [data, filters]);

    const resetFilters = () => setFilters({ year: '', quarter: '', homeOwner: '', term: '' });

    return { filteredData, filters, setFilters, resetFilters };
};


export default useFilter;