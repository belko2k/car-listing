import { Database as DB } from '@/types_db';

declare global {
  type Database = DB;
}
