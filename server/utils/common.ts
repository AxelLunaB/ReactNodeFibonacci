/**
 *
 * Common functions that can be reused all over the modules are stored in here.
 */
export const isPositiveWholeNum = (paramName: string) => {
  return (req, res, next) => {
    const n = req.params[paramName];

    if (typeof n === undefined) return res.status(400).send(`query malformed`);

    if (isNaN(n) || Number.isNaN(n) || n % 1 != 0 || n < 0)
      return res.status(400).send(`query params malformed`);

    next();
  };
};
