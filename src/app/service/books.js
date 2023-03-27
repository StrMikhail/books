import httpService from './http.service';

const searchEndpoint = '?q=';
// const producstCategoryEndpoint = 'volumes/';

const booksService = {
    getAll: async (category, search, sort, page = 1, limit = 30) => {
        const { data } = await httpService.get(
            searchEndpoint + (search === null ? category : search),
            {
                params: {
                    startIndex: page,
                    maxResults: limit,
                    orderBy: sort,
                },
            },
        );
        return data;
    },
    getOne: async (id) => {
        const { data } = await httpService.get(id);
        return data;
    },
    getSearchHeader: async (search) => {
        const { data } = await httpService.get(searchEndpoint + search + `+intitle`, {
            params: {
                startIndex: 1,
                maxResults: 3,
            },
        });
        return data;
    },
};

export default booksService;
