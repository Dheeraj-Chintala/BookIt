const PROMO_CODES = {
  SAVE10: { type: "percent", value: 0.1 },
  FLAT100: { type: "flat", value: 100 },
};

export const validatePromo = (req, res) => {
  const { code, total } = req.body;
  const promo = PROMO_CODES[code];

  if (!promo) {
    return res.status(400).json({ valid: false, message: "Invalid promo code" });
  }

  let discount = 0;
  if (promo.type === "percent") discount = total * promo.value;
  else if (promo.type === "flat") discount = promo.value;

  const finalPrice = total - discount;
  res.json({ valid: true, discount, finalPrice });
};
