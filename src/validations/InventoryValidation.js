const InventoryValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.nama = "Nama harus diisi";
  }

  if (!values.qty || values.qrt === "") {
    errors.qty = "Jumlah harus diisi";
  }

  return errors
};

export default InventoryValidation;
