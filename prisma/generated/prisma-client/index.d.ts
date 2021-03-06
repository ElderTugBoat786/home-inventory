// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  home: (where?: HomeWhereInput) => Promise<boolean>;
  product: (where?: ProductWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  home: (where: HomeWhereUniqueInput) => HomeNullablePromise;
  homes: (args?: {
    where?: HomeWhereInput;
    orderBy?: HomeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Home>;
  homesConnection: (args?: {
    where?: HomeWhereInput;
    orderBy?: HomeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => HomeConnectionPromise;
  product: (where: ProductWhereUniqueInput) => ProductNullablePromise;
  products: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Product>;
  productsConnection: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProductConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createHome: (data: HomeCreateInput) => HomePromise;
  updateHome: (args: {
    data: HomeUpdateInput;
    where: HomeWhereUniqueInput;
  }) => HomePromise;
  updateManyHomes: (args: {
    data: HomeUpdateManyMutationInput;
    where?: HomeWhereInput;
  }) => BatchPayloadPromise;
  upsertHome: (args: {
    where: HomeWhereUniqueInput;
    create: HomeCreateInput;
    update: HomeUpdateInput;
  }) => HomePromise;
  deleteHome: (where: HomeWhereUniqueInput) => HomePromise;
  deleteManyHomes: (where?: HomeWhereInput) => BatchPayloadPromise;
  createProduct: (data: ProductCreateInput) => ProductPromise;
  updateProduct: (args: {
    data: ProductUpdateInput;
    where: ProductWhereUniqueInput;
  }) => ProductPromise;
  updateManyProducts: (args: {
    data: ProductUpdateManyMutationInput;
    where?: ProductWhereInput;
  }) => BatchPayloadPromise;
  upsertProduct: (args: {
    where: ProductWhereUniqueInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  }) => ProductPromise;
  deleteProduct: (where: ProductWhereUniqueInput) => ProductPromise;
  deleteManyProducts: (where?: ProductWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  home: (
    where?: HomeSubscriptionWhereInput
  ) => HomeSubscriptionPayloadSubscription;
  product: (
    where?: ProductSubscriptionWhereInput
  ) => ProductSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProductOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "barcode_ASC"
  | "barcode_DESC"
  | "image_ASC"
  | "image_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type HomeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "owner_ASC"
  | "owner_DESC"
  | "city_ASC"
  | "city_DESC"
  | "region_ASC"
  | "region_DESC"
  | "number_ASC"
  | "number_DESC"
  | "cap_ASC"
  | "cap_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type HomeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ProductWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  barcode?: Maybe<String>;
  barcode_not?: Maybe<String>;
  barcode_in?: Maybe<String[] | String>;
  barcode_not_in?: Maybe<String[] | String>;
  barcode_lt?: Maybe<String>;
  barcode_lte?: Maybe<String>;
  barcode_gt?: Maybe<String>;
  barcode_gte?: Maybe<String>;
  barcode_contains?: Maybe<String>;
  barcode_not_contains?: Maybe<String>;
  barcode_starts_with?: Maybe<String>;
  barcode_not_starts_with?: Maybe<String>;
  barcode_ends_with?: Maybe<String>;
  barcode_not_ends_with?: Maybe<String>;
  image?: Maybe<String>;
  image_not?: Maybe<String>;
  image_in?: Maybe<String[] | String>;
  image_not_in?: Maybe<String[] | String>;
  image_lt?: Maybe<String>;
  image_lte?: Maybe<String>;
  image_gt?: Maybe<String>;
  image_gte?: Maybe<String>;
  image_contains?: Maybe<String>;
  image_not_contains?: Maybe<String>;
  image_starts_with?: Maybe<String>;
  image_not_starts_with?: Maybe<String>;
  image_ends_with?: Maybe<String>;
  image_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  OR?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  NOT?: Maybe<ProductWhereInput[] | ProductWhereInput>;
}

export interface HomeWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  owner?: Maybe<String>;
  owner_not?: Maybe<String>;
  owner_in?: Maybe<String[] | String>;
  owner_not_in?: Maybe<String[] | String>;
  owner_lt?: Maybe<String>;
  owner_lte?: Maybe<String>;
  owner_gt?: Maybe<String>;
  owner_gte?: Maybe<String>;
  owner_contains?: Maybe<String>;
  owner_not_contains?: Maybe<String>;
  owner_starts_with?: Maybe<String>;
  owner_not_starts_with?: Maybe<String>;
  owner_ends_with?: Maybe<String>;
  owner_not_ends_with?: Maybe<String>;
  city?: Maybe<String>;
  city_not?: Maybe<String>;
  city_in?: Maybe<String[] | String>;
  city_not_in?: Maybe<String[] | String>;
  city_lt?: Maybe<String>;
  city_lte?: Maybe<String>;
  city_gt?: Maybe<String>;
  city_gte?: Maybe<String>;
  city_contains?: Maybe<String>;
  city_not_contains?: Maybe<String>;
  city_starts_with?: Maybe<String>;
  city_not_starts_with?: Maybe<String>;
  city_ends_with?: Maybe<String>;
  city_not_ends_with?: Maybe<String>;
  region?: Maybe<String>;
  region_not?: Maybe<String>;
  region_in?: Maybe<String[] | String>;
  region_not_in?: Maybe<String[] | String>;
  region_lt?: Maybe<String>;
  region_lte?: Maybe<String>;
  region_gt?: Maybe<String>;
  region_gte?: Maybe<String>;
  region_contains?: Maybe<String>;
  region_not_contains?: Maybe<String>;
  region_starts_with?: Maybe<String>;
  region_not_starts_with?: Maybe<String>;
  region_ends_with?: Maybe<String>;
  region_not_ends_with?: Maybe<String>;
  number?: Maybe<String>;
  number_not?: Maybe<String>;
  number_in?: Maybe<String[] | String>;
  number_not_in?: Maybe<String[] | String>;
  number_lt?: Maybe<String>;
  number_lte?: Maybe<String>;
  number_gt?: Maybe<String>;
  number_gte?: Maybe<String>;
  number_contains?: Maybe<String>;
  number_not_contains?: Maybe<String>;
  number_starts_with?: Maybe<String>;
  number_not_starts_with?: Maybe<String>;
  number_ends_with?: Maybe<String>;
  number_not_ends_with?: Maybe<String>;
  cap?: Maybe<String>;
  cap_not?: Maybe<String>;
  cap_in?: Maybe<String[] | String>;
  cap_not_in?: Maybe<String[] | String>;
  cap_lt?: Maybe<String>;
  cap_lte?: Maybe<String>;
  cap_gt?: Maybe<String>;
  cap_gte?: Maybe<String>;
  cap_contains?: Maybe<String>;
  cap_not_contains?: Maybe<String>;
  cap_starts_with?: Maybe<String>;
  cap_not_starts_with?: Maybe<String>;
  cap_ends_with?: Maybe<String>;
  cap_not_ends_with?: Maybe<String>;
  products_every?: Maybe<ProductWhereInput>;
  products_some?: Maybe<ProductWhereInput>;
  products_none?: Maybe<ProductWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<HomeWhereInput[] | HomeWhereInput>;
  OR?: Maybe<HomeWhereInput[] | HomeWhereInput>;
  NOT?: Maybe<HomeWhereInput[] | HomeWhereInput>;
}

export type ProductWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface HomeCreateInput {
  id?: Maybe<ID_Input>;
  owner: String;
  city: String;
  region: String;
  number: String;
  cap: String;
  products?: Maybe<ProductCreateManyInput>;
}

export interface ProductCreateManyInput {
  create?: Maybe<ProductCreateInput[] | ProductCreateInput>;
  connect?: Maybe<ProductWhereUniqueInput[] | ProductWhereUniqueInput>;
}

export interface ProductCreateInput {
  id?: Maybe<ID_Input>;
  barcode: String;
  image: String;
  description: String;
}

export interface HomeUpdateInput {
  owner?: Maybe<String>;
  city?: Maybe<String>;
  region?: Maybe<String>;
  number?: Maybe<String>;
  cap?: Maybe<String>;
  products?: Maybe<ProductUpdateManyInput>;
}

export interface ProductUpdateManyInput {
  create?: Maybe<ProductCreateInput[] | ProductCreateInput>;
  update?: Maybe<
    | ProductUpdateWithWhereUniqueNestedInput[]
    | ProductUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | ProductUpsertWithWhereUniqueNestedInput[]
    | ProductUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<ProductWhereUniqueInput[] | ProductWhereUniqueInput>;
  connect?: Maybe<ProductWhereUniqueInput[] | ProductWhereUniqueInput>;
  set?: Maybe<ProductWhereUniqueInput[] | ProductWhereUniqueInput>;
  disconnect?: Maybe<ProductWhereUniqueInput[] | ProductWhereUniqueInput>;
  deleteMany?: Maybe<ProductScalarWhereInput[] | ProductScalarWhereInput>;
  updateMany?: Maybe<
    | ProductUpdateManyWithWhereNestedInput[]
    | ProductUpdateManyWithWhereNestedInput
  >;
}

export interface ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput;
  data: ProductUpdateDataInput;
}

export interface ProductUpdateDataInput {
  barcode?: Maybe<String>;
  image?: Maybe<String>;
  description?: Maybe<String>;
}

export interface ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput;
  update: ProductUpdateDataInput;
  create: ProductCreateInput;
}

export interface ProductScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  barcode?: Maybe<String>;
  barcode_not?: Maybe<String>;
  barcode_in?: Maybe<String[] | String>;
  barcode_not_in?: Maybe<String[] | String>;
  barcode_lt?: Maybe<String>;
  barcode_lte?: Maybe<String>;
  barcode_gt?: Maybe<String>;
  barcode_gte?: Maybe<String>;
  barcode_contains?: Maybe<String>;
  barcode_not_contains?: Maybe<String>;
  barcode_starts_with?: Maybe<String>;
  barcode_not_starts_with?: Maybe<String>;
  barcode_ends_with?: Maybe<String>;
  barcode_not_ends_with?: Maybe<String>;
  image?: Maybe<String>;
  image_not?: Maybe<String>;
  image_in?: Maybe<String[] | String>;
  image_not_in?: Maybe<String[] | String>;
  image_lt?: Maybe<String>;
  image_lte?: Maybe<String>;
  image_gt?: Maybe<String>;
  image_gte?: Maybe<String>;
  image_contains?: Maybe<String>;
  image_not_contains?: Maybe<String>;
  image_starts_with?: Maybe<String>;
  image_not_starts_with?: Maybe<String>;
  image_ends_with?: Maybe<String>;
  image_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ProductScalarWhereInput[] | ProductScalarWhereInput>;
  OR?: Maybe<ProductScalarWhereInput[] | ProductScalarWhereInput>;
  NOT?: Maybe<ProductScalarWhereInput[] | ProductScalarWhereInput>;
}

export interface ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyDataInput;
}

export interface ProductUpdateManyDataInput {
  barcode?: Maybe<String>;
  image?: Maybe<String>;
  description?: Maybe<String>;
}

export interface HomeUpdateManyMutationInput {
  owner?: Maybe<String>;
  city?: Maybe<String>;
  region?: Maybe<String>;
  number?: Maybe<String>;
  cap?: Maybe<String>;
}

export interface ProductUpdateInput {
  barcode?: Maybe<String>;
  image?: Maybe<String>;
  description?: Maybe<String>;
}

export interface ProductUpdateManyMutationInput {
  barcode?: Maybe<String>;
  image?: Maybe<String>;
  description?: Maybe<String>;
}

export interface HomeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<HomeWhereInput>;
  AND?: Maybe<HomeSubscriptionWhereInput[] | HomeSubscriptionWhereInput>;
  OR?: Maybe<HomeSubscriptionWhereInput[] | HomeSubscriptionWhereInput>;
  NOT?: Maybe<HomeSubscriptionWhereInput[] | HomeSubscriptionWhereInput>;
}

export interface ProductSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProductWhereInput>;
  AND?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  OR?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  NOT?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Home {
  id: ID_Output;
  owner: String;
  city: String;
  region: String;
  number: String;
  cap: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface HomePromise extends Promise<Home>, Fragmentable {
  id: () => Promise<ID_Output>;
  owner: () => Promise<String>;
  city: () => Promise<String>;
  region: () => Promise<String>;
  number: () => Promise<String>;
  cap: () => Promise<String>;
  products: <T = FragmentableArray<Product>>(args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface HomeSubscription
  extends Promise<AsyncIterator<Home>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  owner: () => Promise<AsyncIterator<String>>;
  city: () => Promise<AsyncIterator<String>>;
  region: () => Promise<AsyncIterator<String>>;
  number: () => Promise<AsyncIterator<String>>;
  cap: () => Promise<AsyncIterator<String>>;
  products: <T = Promise<AsyncIterator<ProductSubscription>>>(args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface HomeNullablePromise
  extends Promise<Home | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  owner: () => Promise<String>;
  city: () => Promise<String>;
  region: () => Promise<String>;
  number: () => Promise<String>;
  cap: () => Promise<String>;
  products: <T = FragmentableArray<Product>>(args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface Product {
  id: ID_Output;
  barcode: String;
  image: String;
  description: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ProductPromise extends Promise<Product>, Fragmentable {
  id: () => Promise<ID_Output>;
  barcode: () => Promise<String>;
  image: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ProductSubscription
  extends Promise<AsyncIterator<Product>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  barcode: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ProductNullablePromise
  extends Promise<Product | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  barcode: () => Promise<String>;
  image: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface HomeConnection {
  pageInfo: PageInfo;
  edges: HomeEdge[];
}

export interface HomeConnectionPromise
  extends Promise<HomeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<HomeEdge>>() => T;
  aggregate: <T = AggregateHomePromise>() => T;
}

export interface HomeConnectionSubscription
  extends Promise<AsyncIterator<HomeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<HomeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateHomeSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface HomeEdge {
  node: Home;
  cursor: String;
}

export interface HomeEdgePromise extends Promise<HomeEdge>, Fragmentable {
  node: <T = HomePromise>() => T;
  cursor: () => Promise<String>;
}

export interface HomeEdgeSubscription
  extends Promise<AsyncIterator<HomeEdge>>,
    Fragmentable {
  node: <T = HomeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateHome {
  count: Int;
}

export interface AggregateHomePromise
  extends Promise<AggregateHome>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateHomeSubscription
  extends Promise<AsyncIterator<AggregateHome>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges: ProductEdge[];
}

export interface ProductConnectionPromise
  extends Promise<ProductConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProductEdge>>() => T;
  aggregate: <T = AggregateProductPromise>() => T;
}

export interface ProductConnectionSubscription
  extends Promise<AsyncIterator<ProductConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProductEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProductSubscription>() => T;
}

export interface ProductEdge {
  node: Product;
  cursor: String;
}

export interface ProductEdgePromise extends Promise<ProductEdge>, Fragmentable {
  node: <T = ProductPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProductEdgeSubscription
  extends Promise<AsyncIterator<ProductEdge>>,
    Fragmentable {
  node: <T = ProductSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProduct {
  count: Int;
}

export interface AggregateProductPromise
  extends Promise<AggregateProduct>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProductSubscription
  extends Promise<AsyncIterator<AggregateProduct>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface HomeSubscriptionPayload {
  mutation: MutationType;
  node: Home;
  updatedFields: String[];
  previousValues: HomePreviousValues;
}

export interface HomeSubscriptionPayloadPromise
  extends Promise<HomeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = HomePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = HomePreviousValuesPromise>() => T;
}

export interface HomeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<HomeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = HomeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = HomePreviousValuesSubscription>() => T;
}

export interface HomePreviousValues {
  id: ID_Output;
  owner: String;
  city: String;
  region: String;
  number: String;
  cap: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface HomePreviousValuesPromise
  extends Promise<HomePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  owner: () => Promise<String>;
  city: () => Promise<String>;
  region: () => Promise<String>;
  number: () => Promise<String>;
  cap: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface HomePreviousValuesSubscription
  extends Promise<AsyncIterator<HomePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  owner: () => Promise<AsyncIterator<String>>;
  city: () => Promise<AsyncIterator<String>>;
  region: () => Promise<AsyncIterator<String>>;
  number: () => Promise<AsyncIterator<String>>;
  cap: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ProductSubscriptionPayload {
  mutation: MutationType;
  node: Product;
  updatedFields: String[];
  previousValues: ProductPreviousValues;
}

export interface ProductSubscriptionPayloadPromise
  extends Promise<ProductSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProductPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProductPreviousValuesPromise>() => T;
}

export interface ProductSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProductSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProductSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProductPreviousValuesSubscription>() => T;
}

export interface ProductPreviousValues {
  id: ID_Output;
  barcode: String;
  image: String;
  description: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ProductPreviousValuesPromise
  extends Promise<ProductPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  barcode: () => Promise<String>;
  image: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ProductPreviousValuesSubscription
  extends Promise<AsyncIterator<ProductPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  barcode: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Home",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
