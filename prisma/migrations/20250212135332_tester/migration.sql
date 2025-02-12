-- CreateTable
CREATE TABLE "BTCPayServerStore" (
    "id" SERIAL NOT NULL,
    "btcpayUrl" TEXT NOT NULL,
    "shopName" TEXT,
    "shop" TEXT NOT NULL,
    "btcpayStoreId" TEXT NOT NULL,
    "shopId" TEXT,
    "shopOwner" TEXT,
    "currency" TEXT,
    "country" TEXT,

    CONSTRAINT "BTCPayServerStore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BTCPayServerStore_shop_key" ON "BTCPayServerStore"("shop");
