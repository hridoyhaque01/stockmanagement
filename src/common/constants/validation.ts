import {
  AddSuppliesForm,
  CustomerAddForm,
  GrainAddForm,
  SupplierAddForm,
} from "../types";
const addSuppliesValidation = (data: AddSuppliesForm) => {
  if (!data.productId) return { error: "Product not selected" };
  if (!data.supplierId) return { error: "Supplier not selected" };
  if (!data.category) return { error: "Category not selected" };
  if (!data.quantity) return { error: "Quantity is required" };
  if (!data.price) return { error: "Price is required" };
  if (!data.paidAmount) return { error: "Paid Amount is required" };
  if (!data.dueAmount) return { error: "Due Amount is required" };
  if (!data?.insertDate) return { error: "Date is required" };
  return { error: null };
};

const grainAddValidation = (data: GrainAddForm) => {
  if (!data?.productId) return { error: "Product not selected" };
  if (!data?.productQuantity) return { error: "Product Quantity is required" };
  if (!data?.productCategory) return { error: "Product Category not selected" };
  if (!data?.grainQuantity) return { error: "Grain Quantity is required" };
  if (!data?.grainCategory) return { error: "Grain Category not selected" };
  if (!data?.price) return { error: "Price is required" };
  if (!data?.insertDate) return { error: "Date is required" };

  return { error: null };
};

const supplierAddValidation = (data: SupplierAddForm) => {
  if (!data.supplierName) return { error: "Supplier Name is required" };
  if (!data.supplierPhone) return { error: "Supplier Phone is required" };
  return { error: null };
};

const customerAddValidation = (data: CustomerAddForm) => {
  if (!data.customerName) return { error: "Customer Name is required" };
  if (!data.customerPhone) return { error: "Customer Phone is required" };
  return { error: null };
};

export {
  addSuppliesValidation,
  customerAddValidation,
  grainAddValidation,
  supplierAddValidation,
};
