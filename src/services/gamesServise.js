import { getRequest } from '.';
import { store } from '../store/store';

export const getGamesList = async (page) => {
  try {
    const { search, sort, sort_direction, filter } = store.getState().search;
    const platforms = filter.replace(' ', '');
    const ordering = `${sort_direction === 'asc' ? '' : '-'}${sort}`;
    const page_size = 24;
    const urlParams = {
      pathname: '/games',
      query: ordering
        ? { search, ordering, platforms, page, page_size }
        : { search, platforms, page, page_size },
    };

    const { results, next } = await getRequest(urlParams);

    return {
      data: results.map(
        ({ id, slug, name, released, rating, background_image }) => ({
          id,
          slug,
          name,
          released,
          rating,
          background_image,
        })
      ),
      isLastPage: !next,
    };
  } catch (e) {
    throw e;
  }
};

export const getPlatformsList = async (page) => {
  try {
    const urlParams = {
      pathname: '/platforms',
      query: {
        page,
        page_size: 24,
      },
    };

    const { results, next } = await getRequest(urlParams);

    return {
      data: results.map(({ id, name }) => ({ value: `${id}`, title: name })),
      isLastPage: !next,
    };
  } catch (e) {
    throw e;
  }
};

export const getGameAdditionsList = async (slug) => {
  try {
    const urlParams = {
      pathname: `/games/${slug}`,
    };

    const data = await getRequest(urlParams);

    return {
      data,
    };
  } catch (e) {
    throw e;
  }
};

export const getGameScreenshotsList = async (slug, page) => {
  try {
    const urlParams = {
      pathname: `/games/${slug}/screenshots`,
      query: {
        page,
        page_size: 24,
      },
    };

    const { next, results } = await getRequest(urlParams);

    return {
      data: results.map(({ id, image }) => ({ id, image })),
      isLastPage: !next,
    };
  } catch (e) {
    throw e;
  }
};
