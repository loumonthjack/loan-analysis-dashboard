import { useState, useEffect } from 'react';
import { getData } from '../request/api';

const useFetchLoanData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const loans = await getData();
                loans.pop();
                setData(loans);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error };
}

export const calculateTotalBalanceByGrade = (data) => {
    const loanDataByGrade = data.reduce((acc, loan) => {
        const { grade, currentBalance } = loan;

        if (!acc[grade]) acc[grade] = { grade, totalBalance: 0 };
        acc[grade].totalBalance += Number(currentBalance);

        return acc;
    }, {});

    const loanByGradeTotal = Object.values(loanDataByGrade)
        .map(item => ({
            ...item,
            total: Math.round(item.totalBalance),
        }))
    return loanByGradeTotal;
};

export default useFetchLoanData;
