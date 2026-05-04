"use client";
import { useSession, authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const currentImage =
    previewUrl ||
    session?.user?.image;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const image = formData.get("image");

    const { error } = await authClient.updateUser({
      name,
      image: image || undefined,
    });

    if (error) {
      toast.error("Update failed!");
    } else {
      toast.success("Profile updated!");
      setPreviewUrl(image);
      router.refresh();
      setTimeout(() => {
        router.push("/my-profile");
      }, 500);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card bg-base-100 shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-black mb-6 text-center">
          Update <span className="text-primary">Profile</span>
        </h2>

        <div className="flex justify-center mb-6">
          <Image
            src={currentImage}
            alt="Preview"
            onError={(e) =>
              (e.target.src = "https://i.ibb.co/mJR9Qxc/user-avatar.png")
            }
            className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-md"
          />
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={session?.user?.name || ""}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="image"
              defaultValue={session?.user?.image }
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
              onChange={(e) => setPreviewUrl(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Save Changes"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;