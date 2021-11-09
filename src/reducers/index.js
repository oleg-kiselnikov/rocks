import updateCragList from './crag-list';
import updateRouteTable from './route-table';

const reducer = (state, action) => {
    return {
        cragList: updateCragList(state, action),
        routeTable: updateRouteTable(state, action)
    }
};

export default reducer;