type TableProps<Type extends string[]> = {
  title: string,
  columns: Type,
  rowsData: Type[],
};

class Table<T extends string[]> {
  private static checkColumnsCompatability<Type extends string[]>(
    columns: Type,
    rowsData: Type[],
  ): boolean {
    // Todo: Patikrinti ar stulpelių skaičius yra lygus kiekvienos eilutės stulpelių skaičiui
    if (columns.length !== rowsData.length) return false;

    const rowsNumbers = [...rowsData].map((x) => x.length);

    const IsTrueOrFalse = rowsNumbers.map((rowNumber) => {
      if (columns.length === rowNumber) {
        return true;
      }
      return false;
    });

    const isFalse = IsTrueOrFalse.some((isTrue) => isTrue === false);

    if (isFalse === true) return false;

    return true;
  }

  public htmlElement!: HTMLTableElement;

  private props!: TableProps<T>;

  private thead!: HTMLTableSectionElement;

  private tbody!: HTMLTableSectionElement;

  constructor(props: TableProps<T>) {
    console.log(this.props, this.thead, this.tbody);
    const columnsIsCompatable = Table.checkColumnsCompatability(props.columns, props.rowsData);
    if (!columnsIsCompatable) {
      throw new Error('Lentelės stulpeliai nesuderinti su lentelės duomenimis');
    }
  }
}

export default Table;
