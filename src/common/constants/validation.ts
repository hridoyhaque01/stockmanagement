import {
  AddSuppliesForm,
  CustomerAddForm,
  CustomerUpdateForm,
  GrainAddForm,
  SaleAddForm,
  SupplierAddForm,
  SupplierUpdateForm,
<<<<<<< HEAD
  UserPasswordForm,
  UserProfileForm,
=======
>>>>>>> 5543df6 (fix tables and add some api's)
} from "../types";
const addSuppliesValidation = (data: AddSuppliesForm) => {
  if (!data.productId) return { error: "Product not selected" };
  if (!data.supplierId) return { error: "Supplier not selected" };
  if (!data.category) return { error: "Category not selected" };
  if (!data.quantity) return { error: "Quantity is required" };
  if (!data.price) return { error: "Price is required" };
  if (!data.paidAmount) return { error: "Paid Amount is required" };
  if (data.dueAmount !== 0 && !data.dueAmount)
    return { error: "Due Amount is required" };
  if (data.avaragePrice !== 0 && !data.avaragePrice)
    return { error: "Avarage Price is required" };
  if (!data?.proccessTime) return { error: "Date is required" };
  return { error: null };
};

const grainAddValidation = (data: GrainAddForm) => {
  if (!data?.productId) return { error: "Product not selected" };
  if (!data?.productQuantity) return { error: "Product Quantity is required" };
  if (!data?.productCategory) return { error: "Product Category not selected" };
  if (!data?.grainQuantity) return { error: "Grain Quantity is required" };
  if (!data?.grainCategory) return { error: "Grain Category not selected" };
  if (!data?.price) return { error: "Price is required" };
  if (!data?.proccessTime) return { error: "Date is required" };

  return { error: null };
};

const supplierAddValidation = (data: SupplierAddForm) => {
  if (!data.supplierName) return { error: "Supplier Name is required" };
  if (!data.supplierPhone) return { error: "Supplier Phone is required" };
  return { error: null };
};

const supplierUpdateValidation = (data: SupplierUpdateForm) => {
  if (!data?.supplierName || !data?.supplierEmail || !data?.supplierAddress)
    return { error: "At least one field is required" };
  return { error: null };
};

const customerAddValidation = (data: CustomerAddForm) => {
  if (!data.customerName) return { error: "Customer Name is required" };
  if (!data.customerPhone) return { error: "Customer Phone is required" };
  return { error: null };
};

const customerUpdateValidation = (data: CustomerUpdateForm) => {
  if (!data?.customerName && !data?.customerEmail && !data?.customerAddress)
    return { error: "At least one field is required" };
  return { error: null };
};

const saleAddValidation = (data: SaleAddForm) => {
  if (data?.orders?.length === 0) return { error: "Orders is required" };
  if (!data.customerName) return { error: "Customer Name is required" };
  if (!data.customerPhone) return { error: "Customer Phone is required" };
  if (!data?.totalPrice) return { error: "Total Price is required" };
  if (!data?.totalPaid) return { error: "Total Paid is required" };
  if (!data?.totalDue) return { error: "Total Due is required" };
  return { error: null };
};

const validateUserData = (data: UserProfileForm) => {
  if (!data?.username) return { error: "Username is required" };
  return { error: null };
};

const validateUserPassword = (data: UserPasswordForm) => {
  if (!data?.currentPassword) return { error: "Current Password is required" };
  if (!data?.newPassword) return { error: "New Password is required" };
  if (!data?.confirmPassword) return { error: "Confirm Password is required" };
  if(data?.newPassword !== data?.confirmPassword) return { error: "Password does not match" };
  return { error: null };
};

export {
  addSuppliesValidation,
  customerAddValidation,
  customerUpdateValidation,
  grainAddValidation,
  saleAddValidation,
  supplierAddValidation,
  supplierUpdateValidation,
<<<<<<< HEAD
  validateUserData,
  validateUserPassword
=======
  customerUpdateValidation
>>>>>>> 5543df6 (fix tables and add some api's)
};
