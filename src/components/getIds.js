
export const getIds = (array) => {
    const ids = array.map((type) => {
      return type.id;
    });
    const lastId = Math.max(0, ...ids);
    console.log(lastId);
    return lastId;
  }