-- Tabel untuk menyimpan user
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50),
    Email VARCHAR(100)
);

-- Tabel untuk menyimpan Purchase Order
CREATE TABLE PurchaseOrders (
    PurchaseOrderID INT PRIMARY KEY,
    UserID INT,
    OrderDate DATE,
    FOREIGN KEY (UserID) REFERENCES Users (UserID)
);

-- Tabel untuk menyimpan Delivery Orders
CREATE TABLE DeliveryOrders (
    DeliveryOrderID INT PRIMARY KEY,
    PurchaseOrderID INT,
    DeliveryDate DATE,
    FOREIGN KEY (PurchaseOrderID) REFERENCES PurchaseOrders (PurchaseOrderID)
);

-- Tabel untuk menyimpan Order Items
CREATE TABLE OrderItems (
    OrderItemID INT PRIMARY KEY,
    PurchaseOrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (PurchaseOrderID) REFERENCES PurchaseOrders (PurchaseOrderID)
);