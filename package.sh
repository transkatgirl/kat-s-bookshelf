cd "bookshelf"

parts=0

for file in *; do
	if [ -d "$file" ]; then
		parts=$((parts+1))
	fi
done

i=1

for file in *; do
	if [ -d "$file" ]; then
		cd "$file"
		7z a -tzip -m0=zstd -mx22 -w "../Kats_Bookshelf.$(date -I).Part_${i}_of_${parts}.Portal.zip" "*"
		i=$((i+1))
		cd ".."
	fi
done
