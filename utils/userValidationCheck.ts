export const checkUserValidation = (users, prop, compareValue) => {
    return (
      users.length !== 0 &&
      users.some(
        (item) => item[prop].toLocaleLowerCase() === compareValue.toLocaleLowerCase()
      )
    );
  };