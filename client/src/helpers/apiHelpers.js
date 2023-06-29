export function getQueryParams(params) {
    const esc = encodeURIComponent;
    return Object.entries(params)
        .filter(([ value]) => value !== undefined) // Фильтруем параметры, удаляя те, у которых значение равно undefined
        .map(([key, value]) => {
            if (key === 'sort' && /^(\+name|\+currentPrice)$/.test(value)) {
                return `${key}=${value}`;
            }
            return [esc(key), esc(value)].join('=');
        })
        .join('&');
}

