export const getProps = () => ({
    loading: false,
    disabled: false,
    err: '',
    suc: '',
})

export const showISODate = (date: string | Date | undefined) => date
    ? new Date(date).toISOString().split('T')[0]
    : ''