export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      brand: {
        Row: {
          brand_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          brand_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          brand_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      car: {
        Row: {
          created_at: string
          id: number
          model_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          model_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          model_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_car_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "model"
            referencedColumns: ["id"]
          }
        ]
      }
      car_type: {
        Row: {
          car_type_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          car_type_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          car_type_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      color: {
        Row: {
          color_code: string | null
          color_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          color_code?: string | null
          color_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          color_code?: string | null
          color_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      condition: {
        Row: {
          condition_type: string | null
          created_at: string
          id: number
        }
        Insert: {
          condition_type?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          condition_type?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      fuel_type: {
        Row: {
          created_at: string
          fuel_type_name: string | null
          id: number
        }
        Insert: {
          created_at?: string
          fuel_type_name?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          fuel_type_name?: string | null
          id?: number
        }
        Relationships: []
      }
      listing: {
        Row: {
          availability: boolean | null
          car_id: number | null
          car_type_id: number | null
          color_id: number | null
          condition_id: number | null
          created_at: string
          description: string | null
          door_count: number | null
          first_registration: string | null
          fuel_type_id: number | null
          id: number
          images: string[] | null
          mileage: number | null
          power: number | null
          previous_owners: number | null
          price: number | null
          seat_count: number | null
          title: string | null
          transmission_id: number | null
          user_id: string | null
        }
        Insert: {
          availability?: boolean | null
          car_id?: number | null
          car_type_id?: number | null
          color_id?: number | null
          condition_id?: number | null
          created_at?: string
          description?: string | null
          door_count?: number | null
          first_registration?: string | null
          fuel_type_id?: number | null
          id?: number
          images?: string[] | null
          mileage?: number | null
          power?: number | null
          previous_owners?: number | null
          price?: number | null
          seat_count?: number | null
          title?: string | null
          transmission_id?: number | null
          user_id?: string | null
        }
        Update: {
          availability?: boolean | null
          car_id?: number | null
          car_type_id?: number | null
          color_id?: number | null
          condition_id?: number | null
          created_at?: string
          description?: string | null
          door_count?: number | null
          first_registration?: string | null
          fuel_type_id?: number | null
          id?: number
          images?: string[] | null
          mileage?: number | null
          power?: number | null
          previous_owners?: number | null
          price?: number | null
          seat_count?: number | null
          title?: string | null
          transmission_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_listing_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "car"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_listing_car_type_id_fkey"
            columns: ["car_type_id"]
            isOneToOne: false
            referencedRelation: "car_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_listing_color_id_fkey"
            columns: ["color_id"]
            isOneToOne: false
            referencedRelation: "color"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_listing_condition_id_fkey"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "condition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_listing_fuel_type_id_fkey"
            columns: ["fuel_type_id"]
            isOneToOne: false
            referencedRelation: "fuel_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_listing_transmission_id_fkey"
            columns: ["transmission_id"]
            isOneToOne: false
            referencedRelation: "transmission"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_listing_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      model: {
        Row: {
          brand_id: number | null
          created_at: string
          id: number
          model_name: string
        }
        Insert: {
          brand_id?: number | null
          created_at?: string
          id?: number
          model_name: string
        }
        Update: {
          brand_id?: number | null
          created_at?: string
          id?: number
          model_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_model_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brand"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          id: string
          metadata: Json | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
          metadata?: Json | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      transmission: {
        Row: {
          created_at: string
          id: number
          transmission_type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          transmission_type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          transmission_type?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
