select "categories"."name" as "category", count(*) as "movies"
from "categories"
join "filmCategory" using ("categoryId")
join "films" using ("filmId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "castMembers"."actorId" = 178
group by "categories"."name"
