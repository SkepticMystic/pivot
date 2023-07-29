import type { ObjectId } from "mongodb"

export const getProps = () => ({
    loading: false,
    disabled: false,
    err: '',
    suc: '',
})

export const showISODate = (date: string | Date | undefined) => date
    ? new Date(date).toISOString().split('T')[0]
    : ''

export const last = <T>(arr: T[]) => arr[arr.length - 1]

export const dedupe = <T>(arr: T[]) => [...new Set(arr)]

export const countValues = <T extends string | number>(arr: T[]) => arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
}, {} as Record<T, number>)

export const _idToString = <T extends { _id?: string | ObjectId }>(doc: T) => {
    if (doc?._id) doc._id = doc._id.toString();
    return doc;
};