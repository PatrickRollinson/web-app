export interface StandardResponse {
    success: boolean;
    message?: string;
}

export interface TagUpdateResponse extends StandardResponse {
    updates?: {
        parent: StandardResponse;
        children: StandardResponse;
        projects: StandardResponse;
    };
}

export interface TagsResponse extends StandardResponse {
    tags?: any[];
}

export interface UserObj {
    // id
    displayName: string;
    photoUrl: string;
    providerId: string;
    role: UserRole;
}

export interface UserRoleObj {
    user: boolean;
    admin: boolean;
    sysadmin: boolean;
}


export interface ProjectReq {
    id: string;
    exists: boolean;
    data?: ProjectObj;
}

export interface ProjectWiki {
    slug: string;
    organisation: string;
    name: string;
    desc: string;
    imageUrl: string;
    projectUrl: string;
}

export interface ProjectObj {
    slug: string;
    userGroupId: string;
    published: boolean;
    name: LanguageOption[];
    desc: LanguageOption[];
    imageUrl: string;
    projectUrl: string;

    // tags
    tags: TagReference[];
    tagIds: string[];
    parentTagIds: string[];
    tagCount: number;

    created: Date;
    updated: Date;
}

export interface EditableProject extends ProjectObj {
    canChangeUserGroup: boolean;

    canEditPublished: boolean;

    // name
    canEditName: boolean;
    canDeleteName: boolean;
    canAddName: boolean;

    // desc
    canEditDesc: boolean;
    canDeleteDesc: boolean;
    canAddDesc: boolean;

    // tags
    canEditTagOrder: boolean;
    canAddTag: boolean;
    canDeleteTag: boolean;

}

export interface GetEditableProjectRes {
    success: boolean;
    project?: EditableProject;
    message?: string;
}

export interface TagSnippet {
    id: string;
    name: LanguageOption[];
    desc: LanguageOption[];
}

export interface TagReference {
    parent: TagSnippet;
    tag: TagSnippet;
}

export interface TagActionsRoles {
    canEdit: string[];
    canChangeUserGroup: string[];
    canChangeSelectable: string[];
    // name
    canEditName: string[];
    canDeleteName: string[];
    canAddName: string[];
    // desc
    canEditDesc: string[];
    canDeleteDesc: string[];
    canAddDesc: string[];
    // tag
    canCreateChildTag: string[];
    canCreateRootTag: string[];
    canAddTagReference: string[];
}

export interface ProjectActionsRoles {
    canEdit: string[];
    canChangeUserGroup: string[];
    canEditPublished: string[];
    canEditName: string[];
    canDeleteName: string[];
    canAddName: string[];
    canEditDesc: string[];
    canDeleteDesc: string[];
    canAddDesc: string[];
    // tags
    canEditTagOrder: string[];
    canAddTag: string[]; // created not tested
    canDeleteTag: string[]; // created not tested
}


export interface EditableTagRes extends StandardResponse {
    tag?: any;
}

export interface CreateTagObject {
    name: LanguageOption[];
    desc: LanguageOption[];
    parentId: string;
    selectable: boolean;
}

export interface CreateRootTagObject {
    userGroupId: string;
    name: LanguageOption[];
    desc: LanguageOption[];
    selectable: boolean;
}

export interface CreateTagRes extends StandardResponse {
    tagId?: string;
}

export interface TagRes extends StandardResponse {
    tag?: any;
}

export interface TagsRes extends StandardResponse {
    tags?: any[];
}

export interface UserGroupsRolesRes extends StandardResponse {
    userGroupRoles?: any[];
}

export interface UpdateTagObject {
    id: string;
    name: LanguageOption[];
    desc: LanguageOption[];
}


export interface LanguageOption {
    language: string;
    text: string;
}

export interface LanguageOptionRef {
    field: string;
    fieldLabel: string;
    array: LanguageOption[];
}

export enum Language {
    english = 'english',
    french = 'french',
}

enum UserRole {
    user = 'user',
    admin = 'admin'
}

export interface UserGroupObj {
    type: string;  // open or closed
    users: UserGroupUser[];
    created: Date;
    updated: Date;
}

export interface UserGroupUser {
    uid: string;
    role: string;
    created: Date;
    updated: Date;
}

export interface UserUserGroup {
    userGroupId: string;
    role: string;
    open: boolean;
}
