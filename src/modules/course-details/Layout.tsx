import React from 'react'

const DetailsLayout = () => {
    const getCourseByQuery = async (id: number): Promise<ICourse | undefined> => {
        try {
          const cookieStore = cookies();
          const token = cookieStore.get(process.env.COOKIES_NAME!);
      
          const res = await fetch(`${process.env.BASE_URL}/course?id=${id}`, {
            headers: {
              Cookie: `${token?.name}=${token?.value}`,
            },
          });
      
          if (res.status === 200) {
            const data = await res.json();
            if (data?.status !== 200) {
              return undefined;
            }
            if (data?.result && data.result.length > 0) {
              return data.result[0];
            } else {
              return undefined;
            }
          } else {
            console.error(`Error fetching user data. Status: ${res.status}`);
            return undefined;
          }
        } catch (error) {
          return undefined;
        }
      };
    const courseData = await getCourseByQuery(params.id);
    if (!courseData) {
      redirect(LINK_TEMPLATES.COURSES());
    }
  return (
    <div>DetailsLayout</div>
  )
}

export default DetailsLayout