export interface BaseEntityModel<Entity> {
  total_count: number;
  incomplete_results: boolean;
  items: Entity[];
}
