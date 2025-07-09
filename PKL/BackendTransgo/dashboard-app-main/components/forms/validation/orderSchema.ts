import * as z from "zod";

const additionalSchema = z.object({
  name: z.string().min(1, "deskripsi layanan"),
  price: z.coerce.string().min(1, { message: "tolong masukkan harga layanan" }),
});

const formSchema = z.object({
  start_request: z.object({
    is_self_pickup: z.any(),
    // address: z.string().min(1, { message: "Tolong masukkan alamat" }),
    // distance: z.coerce.number().gte(0, "Jarak minimal 0 KM"),
    driver_id: z.string().min(1, { message: "Tolong pilih Penanggung Jawab" }),
  }),
  end_request: z.object({
    is_self_pickup: z.any(),
    // address: z.string().min(1, { message: "Tolong masukkan alamat" }),
    // distance: z.coerce.number().gte(0, "Jarak minimal 0 KM"),
    driver_id: z.string().min(1, { message: "Tolong pilih Penanggung Jawab" }),
  }),
  customer: z.string().min(1, { message: "Tolong pilih pelanggan" }),
  fleet: z.string().min(1, { message: "Tolong pilih armada" }),
  description: z.string().optional().nullable(),
  is_with_driver: z.any(),
  is_out_of_town: z.any(),
  // imgUrl: z.array(ImgSchema),
  date: z.coerce.date({ required_error: "Tolong masukkan Waktu" }),
  duration: z.coerce.string().min(1, { message: "tolong masukkan durasi" }),
  discount: z.coerce.string().min(1, { message: "tolong masukkan diskon" }),
  insurance_id: z.string().min(1, { message: "tolong pilih asuransi" }),
  additionals: z.array(additionalSchema),
});

const generateSchema = (startSelfPickUp?: boolean, endSelfPickup?: boolean) => {
  let schema = formSchema;

  if (!startSelfPickUp) {
    schema = schema.extend({
      service_price: z.coerce
        .string()
        .min(1, { message: "tolong masukkan harga layanan" }),

      start_request: schema.shape.start_request.extend({
        address: z.string().min(1, { message: "Tolong masukkan alamat" }),
        distance: z.coerce.number().gte(0, "Jarak minimal 0 KM"),
      }),
    });
  }

  if (!endSelfPickup) {
    schema = schema.extend({
      service_price: z.coerce
        .string()
        .min(1, { message: "tolong masukkan harga layanan" }),

      end_request: schema.shape.end_request.extend({
        address: z.string().min(1, { message: "Tolong masukkan alamat" }),
        distance: z.coerce.number().gte(0, "Jarak minimal 0 KM"),
      }),
    });
  }

  return schema;
};

const editFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Name must be at least 3 characters" }),
  color: z
    .string({
      required_error: "Color is required",
      invalid_type_error: "Color must be a string",
    })
    .optional()
    .nullable(),
  plate_number: z
    .string({
      required_error: "plate number is required",
      invalid_type_error: "plate number must be a string",
    })
    .min(1, { message: "plate number is required" }),
  type: z.string({ required_error: "type is required" }).min(1, {
    message: "type is required",
  }),
  price: z.string({ required_error: "price is required" }).min(1, {
    message: "price is required",
  }),
  location_id: z.string().min(1, { message: "Tolong pilih lokasi" }),
});

export { formSchema, generateSchema, editFormSchema };
