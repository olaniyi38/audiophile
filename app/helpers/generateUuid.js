function generateUuid() {
    const uuid = crypto.randomUUID()

    return uuid
}

export default generateUuid