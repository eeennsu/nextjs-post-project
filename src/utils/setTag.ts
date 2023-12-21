export const setTagsWithShop = (tags: string) => {
    const tagsArray = tags.trim().toLowerCase().split('#').splice(1, tags.length);

    return [...new Set(tagsArray)];
}