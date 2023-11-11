// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

/**
 * Item in *contact → contact_link*
 */
export interface ContactDocumentDataContactLinkItem {
  /**
   * title field in *contact → contact_link*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.contact_link[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * link field in *contact → contact_link*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.contact_link[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Content for contact documents
 */
interface ContactDocumentData {
  /**
   * contact_link field in *contact*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.contact_link[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contact_link: prismic.GroupField<
    Simplify<ContactDocumentDataContactLinkItem>
  >;

  /**
   * status field in *contact*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.status
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  status: prismic.RichTextField;
}

/**
 * contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactDocumentData>,
    "contact",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | FeaturedProjectsSlice
  | FeaturedBlogsSlice;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * heading field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * name field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * banner field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  banner: prismic.KeyTextField;

  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

export type AllDocumentTypes =
  | BlogDocument
  | ContactDocument
  | HomepageDocument
  | ProjectDocument;

/**
 * Primary content in *FeaturedBlogs → Primary*
 */
export interface FeaturedBlogsSliceDefaultPrimary {
  /**
   * image field in *FeaturedBlogs → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_blogs.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *FeaturedBlogs → Items*
 */
export interface FeaturedBlogsSliceDefaultItem {
  /**
   * Blog field in *FeaturedBlogs → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_blogs.items[].blog
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  blog: prismic.ContentRelationshipField<"blog">;
}

/**
 * Default variation for FeaturedBlogs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedBlogsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedBlogsSliceDefaultPrimary>,
  Simplify<FeaturedBlogsSliceDefaultItem>
>;

/**
 * Slice variation for *FeaturedBlogs*
 */
type FeaturedBlogsSliceVariation = FeaturedBlogsSliceDefault;

/**
 * FeaturedBlogs Shared Slice
 *
 * - **API ID**: `featured_blogs`
 * - **Description**: FeaturedBlogs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedBlogsSlice = prismic.SharedSlice<
  "featured_blogs",
  FeaturedBlogsSliceVariation
>;

/**
 * Primary content in *FeaturedProjects → Primary*
 */
export interface FeaturedProjectsSliceDefaultPrimary {
  /**
   * image field in *FeaturedProjects → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *FeaturedProjects → Items*
 */
export interface FeaturedProjectsSliceDefaultItem {
  /**
   * project field in *FeaturedProjects → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.items[].project
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project: prismic.ContentRelationshipField<"project">;
}

/**
 * Default variation for FeaturedProjects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProjectsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedProjectsSliceDefaultPrimary>,
  Simplify<FeaturedProjectsSliceDefaultItem>
>;

/**
 * Slice variation for *FeaturedProjects*
 */
type FeaturedProjectsSliceVariation = FeaturedProjectsSliceDefault;

/**
 * FeaturedProjects Shared Slice
 *
 * - **API ID**: `featured_projects`
 * - **Description**: FeaturedProjects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProjectsSlice = prismic.SharedSlice<
  "featured_projects",
  FeaturedProjectsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      ContactDocument,
      ContactDocumentData,
      ContactDocumentDataContactLinkItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      AllDocumentTypes,
      FeaturedBlogsSlice,
      FeaturedBlogsSliceDefaultPrimary,
      FeaturedBlogsSliceDefaultItem,
      FeaturedBlogsSliceVariation,
      FeaturedBlogsSliceDefault,
      FeaturedProjectsSlice,
      FeaturedProjectsSliceDefaultPrimary,
      FeaturedProjectsSliceDefaultItem,
      FeaturedProjectsSliceVariation,
      FeaturedProjectsSliceDefault,
    };
  }
}
