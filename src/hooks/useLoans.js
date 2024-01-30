import { useMemo } from 'react';
import useFilter from './useFilter';
import useFetchLoans, { calculateTotalBalanceByGrade } from './useFetchLoans';

const useLoanData = () => {
    const { data: loans, loading, error } = useFetchLoans();
    const { filteredData, filters, setFilters, resetFilters } = useFilter(loans);
    const updatedLoans = useMemo(() => calculateTotalBalanceByGrade(filteredData), [filteredData]);

    const aggregatedData = useMemo(() => {
        const gradeTotals = {};
        updatedLoans.forEach(item => {
            const gradeKey = `grade_${item.grade}`;
            gradeTotals[gradeKey] = (gradeTotals[gradeKey] || '') + '$' + item.totalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });

        return [gradeTotals];
    }, [updatedLoans]);

    const columns = useMemo(() => {
        const gradeKeys = Object.keys(aggregatedData[0] || {});
        return gradeKeys.map(key => ({
            Header: key.replace('_', ' ').slice(0, 1).toUpperCase() + key.replace('_', ' ').slice(1),
            accessor: key
        }));
    }, [aggregatedData]);
    return { loans, loading, error, filters, setFilters, resetFilters, updatedLoans, aggregatedData, columns };

};

export default useLoanData;