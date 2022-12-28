export const filterOrders = (orders, search, filter) => {
    if (search === '' && filter === 'All') return orders;
    if (search !== '' && filter === 'All') {
        return orders.filter(row => (
            row.name?.toLowerCase().includes(search.toLowerCase()) ||
            row.from?.toLowerCase().includes(search.toLowerCase()) ||
            row.to?.toLowerCase().includes(search.toLowerCase()) ||
            row.status?.toLowerCase().includes(search.toLowerCase())
        ));
    };
    if (search === '' && filter !== 'All') {
        return orders.filter(row => row.status.toLowerCase() === filter.toLowerCase());
    };
    if (search !== '' && filter !== 'All') {
        return orders.filter(row => (
            (row.name?.toLowerCase().includes(search.toLowerCase()) ||
                row.from?.toLowerCase().includes(search.toLowerCase()) ||
                row.to?.toLowerCase().includes(search.toLowerCase()) ||
                row.status?.toLowerCase().includes(search.toLowerCase())) &&
            row.status.toLowerCase() === filter.toLowerCase()
        ));
    };
};