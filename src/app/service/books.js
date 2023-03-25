import httpService from './http.service';

const searchEndpoint = '?q=';
// const producstCategoryEndpoint = 'volumes/';

const booksService = {
    getAll: async (param, page, limit = 30) => {
        const { data } = await httpService.get(searchEndpoint + param, {
            params: {
                startIndex: page,
                maxResults: limit,
            },
        });
        return data;
    },
    getOne: async (id) => {
        const { data } = await httpService.get(id);
        return data;
    },
};

export default booksService;
