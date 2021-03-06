// Collection Operations
export function append(collection, payload) {
  return [...collection, payload];
}

export function prepend(collection, payload) {
  return [payload, ...collection];
}

export function update(collection, payload) {
  return collection.map((item) => {
    if (item.id !== payload.id) {
      return item;
    }

    return payload;
  });
}
export function remove(collection, selector) {
  const index =
    typeof selector === 'number'
      ? selector
      : collection.findIndex((item) =>
          Object.entries(selector).every(([key, value]) => item[key] === value)
        );
  return [...collection.slice(0, index), ...collection.slice(index + 1)];
}
export function patch(collection, payload) {
  return collection.map((item) => {
    if (item.id !== payload.id) {
      return item;
    }

    return {
      ...item,
      ...payload,
    };
  });
}

export function find(collection, selector) {
  return typeof selector === 'number'
    ? collection[selector]
    : collection.find((item) =>
        Object.entries(selector).every(([key, value]) => item[key] === value)
      );
}

export function insertAfterIndex(collection, payload, index) {
  return [
    ...collection.slice(0, index + 1),
    payload,
    ...collection.slice(index + 1),
  ];
}

export function insertBeforeIndex(collection, payload, index) {
  return [...collection.slice(0, index), payload, ...collection.slice(index)];
}

export function insertAfterMatch(collection, payload, selector) {
  const matchIndex = collection.findIndex((item) => {
    return Object.entries(selector).every(([key, value]) => {
      return item[key] === value;
    });
  });
  return [
    ...collection.slice(0, matchIndex + 1),
    payload,
    ...collection.slice(matchIndex + 1),
  ];
}

export function insertBeforeMatch(collection, payload, selector) {
  const matchIndex = collection.findIndex((item) => {
    return Object.entries(selector).every(([key, value]) => {
      return item[key] === value;
    });
  });
  return [
    ...collection.slice(0, matchIndex),
    payload,
    ...collection.slice(matchIndex),
  ];
}
export function insertBefore(collection, payload, selector) {
  return typeof criteria === 'number'
    ? insertBeforeIndex(collection, payload, selector)
    : insertBeforeMatch(collection, payload, selector);
}

export function insertAfter(collection, payload, selector) {
  return typeof selector === 'number'
    ? insertAfterIndex(collection, payload, selector)
    : insertAfterMatch(collection, payload, selector);
}

export function moveAfter(collection, sourceSelector, targetSelector) {
  const sourceIndex =
    typeof sourceSelector === 'number'
      ? sourceSelector
      : collection.findIndex((item) => {
          return Object.entries(sourceSelector).every(([key, value]) => {
            return item[key] === value;
          });
        });
  const source = collection[sourceIndex];

  return collection?.reduce((accum, item, index) => {
    if (index === sourceIndex) {
      return accum;
    }

    const isTarget =
      typeof targetSelector === 'number'
        ? index === targetSelector
        : Object.entries(targetSelector).every(([key, value]) => {
            return item[key] === value;
          });

    if (isTarget) {
      return [...accum, item, source];
    }

    return [...accum, item];
  }, []);
}

export function moveBefore(collection, sourceSelector, targetSelector) {
  const sourceIndex =
    typeof sourceSelector === 'number'
      ? sourceSelector
      : collection.findIndex((item) => {
          return Object.entries(sourceSelector).every(([key, value]) => {
            return item[key] === value;
          });
        });
  const source = collection[sourceIndex];

  return collection?.reduce((accum, item, index) => {
    if (index === sourceIndex) {
      return accum;
    }

    const isTarget =
      typeof targetSelector === 'number'
        ? index === targetSelector
        : Object.entries(targetSelector).every(([key, value]) => {
            return item[key] === value;
          });

    if (isTarget) {
      return [...accum, source, item];
    }

    return [...accum, item];
  }, []);
}

export function toObject(collection = [], primaryKey = 'id') {
  if (!Array.isArray(collection)) {
    throw new Error('Argument must be an array');
  }
  return collection?.reduce((accum, item) => {
    return {
      ...accum,
      [item?.[primaryKey]]: item,
    };
  }, {});
}

export function toCollection(object) {
  if (typeof collection !== 'object') {
    throw new Error('Argument must be an object');
  }

  return Object.entries(object).map(([key, value]) => {
    return { ...value, id: key };
  });
}

export function collection(c, options = {}) {
  return {
    pipe(...fns) {
      const [fn, ...rest] = fns;

      if (fn) {
        return collection(fn(c)).pipe(...rest);
      }

      return c;
    },
  };
}

export function groupBy(c, keyName) {
  return c.reduce((accum, item) => {
    const key = item[keyName];

    if (!accum[key]) {
      return {
        ...accum,
        [key]: [item],
      };
    }

    return {
      ...accum,
      [key]: [...accum[key], item],
    };
  }, {});
}
