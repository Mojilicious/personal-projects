class Solution {
    public void sortColors(int[] nums) {
    public static void main(String[] args){
        int[] nums = new int[]{2,0,2,1,1,0};

        int x, y, temp;
        boolean swapped;
        for (x = 0; x < nums.length -1; x++){
          swapped = false;
          for (y = 0; y < nums.length -1; y++){
            if (nums[y] > nums[y+1]){

              temp = nums[y];
              nums[y] = nums[y +1];
              nums[y+1] = temp;
              swapped = true;
            
            }
          }
        if (swapped ==false) break;
        }

        System.out.println(nums);
    }
}