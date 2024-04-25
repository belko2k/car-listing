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
      acc_del_req: {
        Row: {
          id: number
          req_email: string | null
          user_id: string | null
        }
        Insert: {
          id?: number
          req_email?: string | null
          user_id?: string | null
        }
        Update: {
          id?: number
          req_email?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_acc_del_req_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "listings_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_acc_del_req_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_acc_del_req_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "single_listing_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_acc_del_req_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_listings"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_acc_del_req_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_listings_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      brand: {
        Row: {
          brand_name: string
          id: number
        }
        Insert: {
          brand_name: string
          id?: number
        }
        Update: {
          brand_name?: string
          id?: number
        }
        Relationships: []
      }
      car_type: {
        Row: {
          car_type_name: string
          id: number
        }
        Insert: {
          car_type_name: string
          id?: number
        }
        Update: {
          car_type_name?: string
          id?: number
        }
        Relationships: []
      }
      color: {
        Row: {
          color_code: string
          color_name: string
          id: number
        }
        Insert: {
          color_code: string
          color_name: string
          id?: number
        }
        Update: {
          color_code?: string
          color_name?: string
          id?: number
        }
        Relationships: []
      }
      condition: {
        Row: {
          condition_type: string
          id: number
        }
        Insert: {
          condition_type: string
          id?: number
        }
        Update: {
          condition_type?: string
          id?: number
        }
        Relationships: []
      }
      fuel_type: {
        Row: {
          fuel_type_name: string
          id: number
        }
        Insert: {
          fuel_type_name: string
          id?: number
        }
        Update: {
          fuel_type_name?: string
          id?: number
        }
        Relationships: []
      }
      listing: {
        Row: {
          availability: boolean | null
          car_type_id: number | null
          color_id: number | null
          condition_id: number | null
          created_at: string
          description: string | null
          door_count: number | null
          first_registration: string | null
          fuel_type_id: number | null
          id: number
          media_id: number | null
          mileage: number | null
          model_id: number | null
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
          car_type_id?: number | null
          color_id?: number | null
          condition_id?: number | null
          created_at?: string
          description?: string | null
          door_count?: number | null
          first_registration?: string | null
          fuel_type_id?: number | null
          id?: number
          media_id?: number | null
          mileage?: number | null
          model_id?: number | null
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
          car_type_id?: number | null
          color_id?: number | null
          condition_id?: number | null
          created_at?: string
          description?: string | null
          door_count?: number | null
          first_registration?: string | null
          fuel_type_id?: number | null
          id?: number
          media_id?: number | null
          mileage?: number | null
          model_id?: number | null
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
            foreignKeyName: "public_listing_media_id_fkey"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_listing_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "model"
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
            referencedRelation: "listings_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_listing_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_listing_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "single_listing_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_listing_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_listings"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_listing_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_listings_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      media: {
        Row: {
          created_at: string
          id: number
          listing_id: number | null
          type: string
          url: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          listing_id?: number | null
          type: string
          url: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          listing_id?: number | null
          type?: string
          url?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_media_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_media_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_media_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "single_listing_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_media_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "user_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_media_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "user_listings_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_media_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "listings_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_media_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_media_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "single_listing_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_media_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_listings"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_media_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_listings_view"
            referencedColumns: ["user_id"]
          },
        ]
      }
      model: {
        Row: {
          brand_id: number
          id: number
          model_name: string
        }
        Insert: {
          brand_id: number
          id?: number
          model_name: string
        }
        Update: {
          brand_id?: number
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
          },
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
          },
        ]
      }
      transmission: {
        Row: {
          id: number
          transmission_type: string
        }
        Insert: {
          id?: number
          transmission_type: string
        }
        Update: {
          id?: number
          transmission_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      listings_view: {
        Row: {
          availability: boolean | null
          brand_name: string | null
          car_type_name: string | null
          color_name: string | null
          condition_type: string | null
          created_at: string | null
          description: string | null
          door_count: number | null
          first_registration: string | null
          fuel_type_name: string | null
          id: number | null
          mileage: number | null
          model_name: string | null
          power: number | null
          previous_owners: number | null
          price: number | null
          seat_count: number | null
          title: string | null
          transmission_type: string | null
          url: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      single_listing_view: {
        Row: {
          address: string | null
          availability: boolean | null
          brand_name: string | null
          car_type_name: string | null
          color_name: string | null
          condition_type: string | null
          contact_number: string | null
          created_at: string | null
          description: string | null
          door_count: number | null
          email: string | null
          first_name: string | null
          first_registration: string | null
          fuel_type_name: string | null
          id: number | null
          last_name: string | null
          mileage: number | null
          model_name: string | null
          power: number | null
          previous_owners: number | null
          price: number | null
          seat_count: number | null
          title: string | null
          transmission_type: string | null
          url: string | null
          user_id: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_listings: {
        Row: {
          availability: boolean | null
          brand_name: string | null
          id: number | null
          model_name: string | null
          price: number | null
          url: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_listings_view: {
        Row: {
          availability: boolean | null
          brand_name: string | null
          id: number | null
          model_name: string | null
          price: number | null
          url: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
