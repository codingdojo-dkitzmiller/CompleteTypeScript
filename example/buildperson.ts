
export function buildPersonData( {firstName, lastName}: { firstName:string, lastName: string}, ...other: any[]): string {
    return `${firstName} ${lastName} ${other.join('-')}`;
}

