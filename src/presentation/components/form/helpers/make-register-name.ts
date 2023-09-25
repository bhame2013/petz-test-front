export function makeRegisterName(listPosition: number | undefined, name: string) {
    return listPosition !== undefined ? `${name}[${listPosition}]` : name
}