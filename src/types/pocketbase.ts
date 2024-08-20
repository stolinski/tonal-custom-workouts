/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Users = "users",
	Workouts = "workouts",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type UsersRecord = {
	avatar?: string
	name?: string
	saved?: RecordIdString[]
	tonal_username?: string
}

export enum WorkoutsGroupOptions {
	"full_body" = "full_body",
	"lower_body" = "lower_body",
	"upper_body" = "upper_body",
}

export enum WorkoutsLevelOptions {
	"beginner" = "beginner",
	"intermediate" = "intermediate",
	"advanced" = "advanced",
}
export type WorkoutsRecord = {
	description?: string
	group?: WorkoutsGroupOptions
	level?: WorkoutsLevelOptions
	link?: string
	long_description?: string
	name?: string
	rating?: number
	user: RecordIdString
}

// Response types include system fields and match responses from the PocketBase API
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type WorkoutsResponse<Texpand = unknown> = Required<WorkoutsRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	users: UsersRecord
	workouts: WorkoutsRecord
}

export type CollectionResponses = {
	users: UsersResponse
	workouts: WorkoutsResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'users'): RecordService<UsersResponse>
	collection(idOrName: 'workouts'): RecordService<WorkoutsResponse>
}
