import { useState, useMemo } from 'react';

const useFilter = (data) => {
    const [filters, setFilters] = useState({ homeOwner: '', quarter: '', term: '', year: '' });
    const filteredData = useMemo(() => {
        return data.filter(item =>
            (!filters.homeOwner || item.homeOwnership === filters.homeOwner) &&
            (!filters.quarter || item.quarter.toString() === filters.quarter) &&
            (!filters.term || item.term === filters.term) &&
            (!filters.year || item.year.toString() === filters.year)
        );
    }, [data, filters]);
    const resetFilters = () => setFilters({ homeOwner: '', quarter: '', term: '', year: '' });
    return { filteredData, filters, setFilters, resetFilters };
};


export default useFilter;