using System.Collections.Generic;

class Result
{

    /*
     * Complete the 'BSTdistance' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY values
     *  2. INTEGER nodeA
     *  3. INTEGER nodeB
     */

    public static int BSTdistance(List<int> values, int nodeA, int nodeB)
    {
        BST tree = new BST();
        for (int i = 0; i < values.Count; i++)
        {
            tree.addNode(values[i]);
        }
        // Tracking result = tree.findDistance(tree.root, nodeA, nodeB);
        // if(result.targetsFound == 2)
        //     return result.distance;
        // else return -1;

    }

}
public class BST
{
    public BSTNode? root;
    public BST()
    {
        this.root = null;
    }
    public void addNode(int value)
    {
        BSTNode newNode = new BSTNode(value);
        if (root == null)
        {
            root = newNode;
            return;
        }
        BSTNode? current = root;
        while (true)
        {
            if (value > current.value)
            {
                if (current.right != null)
                    current = current.right;
                else
                {
                    current.right = newNode;
                    break;
                }
            }
            else
            {
                if (current.left != null)
                    current = current.left;
                else
                {
                    current.left = newNode;
                    break;
                }
            }
        }
    }

    public Tracking findDistance(BSTNode? current, int nodeA, int nodeB)
    {
        if (current == null)
            return new Tracking(0, -1);

        Tracking leftTracking = findDistance(current.left, nodeA, nodeB);
        Tracking rightTracking = findDistance(current.right, nodeA, nodeB);

        if (current.value == nodeA || current.value == nodeB)
        {
            int targetsNum = leftTracking.targetsFound + rightTracking.targetsFound + 1;
            int distance = Math.Max(leftTracking.distance, rightTracking.distance) + 1;
            return new Tracking(targetsNum, distance);
        }
        if (leftTracking.distance == -1 && rightTracking.distance == -1)
            return new Tracking(0, -1);

        if (leftDistance >= 0 && rightDistance >= 0)
            return new Tracking(2, leftDistance + rightDistance + 2);

        int targetsN = leftTracking.targetsFound + rightTracking.targetsFound;
        int distMax = Math.Max(leftTracking.distance, rightTracking.distance);
        int dist = distMax;
        if (targetsN != 2)
            dist = distMax == -1 ? distMax : distMax + 1;
        return new Tracking(targetsN, dist);
    }


}
public class Tracking
{
    public int targetsFound;
    public int distance;
    public Tracking(int targetsFound, int distance)
    {
        this.targetsFound = targetsFound;
        this.distance = distance;
    }
}
public class BSTNode
{
    public BSTNode? right;
    public BSTNode? left;
    public int value;
    public BSTNode(int value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
