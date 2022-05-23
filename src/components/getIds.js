
export const getIds = (array) => {
    const ids = array.map((type) => {
      return type.id;
    });
    // const lastId = Math.max(0, ...ids);
    // return lastId;

    return Math.max(0, ...ids);
  }