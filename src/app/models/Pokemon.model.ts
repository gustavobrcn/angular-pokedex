export class Pokemon {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly type: string,
    public readonly image: string
  ) {}

  public static fromJson(json: any): Pokemon {
    return new Pokemon(
      json.id,
      json.species.name,
      json.types[0].type.name,
      json.sprites.other['official-artwork'].front_default
    );
  }
}
